import React, { useEffect, useRef } from 'react';
import Two from 'two.js';
import Matter from 'matter-js';

export const KeyWords = () => {
  const canvasRef = useRef(null);
  const entities = useRef([]);
  const mouseRef = useRef(null);
  const vector = useRef(new Two.Vector());
  const copy = [
    'Псков',
		'Доклады',
		'Нетворкинг',
		'Афтерпати',
		'Харды',
		'Софты'
  ];

  useEffect(() => {
    const canvasContainer = canvasRef.current;

    // Clear the canvasContainer before initializing Two.js
    while (canvasContainer.firstChild) {
      canvasContainer.removeChild(canvasContainer.firstChild);
    }

    const { offsetWidth: width, offsetHeight: height } = canvasContainer;

    const two = new Two({
      width,
      height,
      type: Two.Types.canvas,
      autostart: true,
    }).appendTo(canvasContainer);

    const solver = Matter.Engine.create();
    solver.world.gravity.y = 1;

    const bounds = {
      length: 1000,
      thickness: 50,
      properties: { isStatic: true }
    };

    const createBoundary = (width, height) => {
      const rectangle = two.makeRectangle(0, 0, width, height);
      rectangle.visible = false;
      rectangle.entity = Matter.Bodies.rectangle(0, 0, width, height, bounds.properties);
      rectangle.entity.position = rectangle.position;
      return rectangle;
    };

    bounds.left = createBoundary(bounds.thickness, bounds.length);
    bounds.right = createBoundary(bounds.thickness, bounds.length);
    bounds.bottom = createBoundary(bounds.length, bounds.thickness);

    Matter.World.add(solver.world, [bounds.left.entity, bounds.right.entity, bounds.bottom.entity]);

    const defaultStyles = {
      size: two.width * 0.08,
      weight: 400,
      fill: 'white',
			fontSize: 25,
      leading: two.width * 0.08 * 0.8,
      family: 'Unbounded-Light',
      alignment: 'center',
      baseline: 'baseline',
      margin: { top: 0, left: 0, right: 0, bottom: 0 }
    };

    const resize = () => {
      const length = bounds.length;
      const thickness = bounds.thickness;

      vector.current.x = -thickness / 2;
      vector.current.y = two.height / 2;
      Matter.Body.setPosition(bounds.left.entity, vector.current);

      vector.current.x = two.width + thickness / 2;
      vector.current.y = two.height / 2;
      Matter.Body.setPosition(bounds.right.entity, vector.current);

      vector.current.x = two.width / 2;
      vector.current.y = two.height + thickness / 2;
      Matter.Body.setPosition(bounds.bottom.entity, vector.current);

      let size;

      if (two.width < 480) {
        size = two.width * 0.12;
      } else if (two.width > 1080 && two.width < 1600) {
        size = two.width * 0.07;
      } else if (two.width > 1600) {
        size = two.width * 0.06;
      } else {
        size = two.width * 0.08;
      }

      const leading = size * 0.8;

      for (let i = 0; i < two.scene.children.length; i++) {
        const child = two.scene.children[i];

        if (!child.isWord) continue;

        const { text, rectangle, entity } = child;

        text.size = size;
        text.leading = leading;

        const rect = text.getBoundingClientRect(true);
        rectangle.width = rect.width;
        rectangle.height = rect.height;

        Matter.Body.scale(entity, 1 / entity.scale.x, 1 / entity.scale.y);
        Matter.Body.scale(entity, rect.width, rect.height);
        entity.scale.set(rect.width, rect.height);
      }
    };

    const addSlogan = () => {
      let x = defaultStyles.margin.left;
      let y = -two.height; // Header offset

      copy.forEach((word) => {
        const group = new Two.Group();
        const text = new Two.Text(word, 0, 0, defaultStyles);

        group.isWord = true;

        const rect = text.getBoundingClientRect();
        let ox = x + rect.width / 2;
        let oy = y + rect.height / 2;

        if (x + rect.width >= two.width) {
          x = defaultStyles.margin.left;
          y += defaultStyles.leading;
          ox = x + rect.width / 2;
          oy = y + rect.height / 2;
        }

        group.translation.set(ox, oy);
        text.translation.y = 14;

        const rectangle = new Two.Rectangle(0, 0, rect.width, rect.height);
        rectangle.fill = `red`;
        rectangle.noStroke();

        const entity = Matter.Bodies.rectangle(ox, oy, 1, 1);
        Matter.Body.scale(entity, rect.width, rect.height);
        entity.scale = new Two.Vector(rect.width, rect.height);
        entity.object = group;
        entities.current.push(entity);

        x += rect.width + defaultStyles.margin.left + defaultStyles.margin.right;

        group.text = text;
        group.rectangle = rectangle;
        group.entity = entity;

        group.add(rectangle, text);
        two.add(group);
      });

      Matter.World.add(solver.world, entities.current);
    };

    const addMouseInteraction = () => {
      const mouse = Matter.Mouse.create(canvasContainer); // Restrict mouse to canvas
      const mouseConstraint = Matter.MouseConstraint.create(solver, {
        mouse: mouse,
        constraint: { stiffness: 0.2 }
      });
      Matter.World.add(solver.world, mouseConstraint);
      return mouseConstraint;
    };

    const update = () => {
      const allBodies = Matter.Composite.allBodies(solver.world);
      Matter.MouseConstraint.update(mouseRef.current, allBodies);
      Matter.Engine.update(solver, 1000 / 60); // Fixed timestep

      entities.current.forEach((entity) => {
        entity.object.position.copy(entity.position);
        entity.object.rotation = entity.angle;
      });
    };

    two.bind('resize', resize).bind('update', update);
    addSlogan();
    mouseRef.current = addMouseInteraction();
    resize();

    return () => {
      two.unbind('resize', resize).unbind('update', update);
    };
  }, []);

  return (
      <div ref={canvasRef} style={{ 
				height: '500px',
				background: '#080808'
			}}/>
  );
};