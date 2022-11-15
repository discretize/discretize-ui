import visit from 'unist-util-visit';
import resolve from './map-gw2-ids.js';

import { injectCharacterProps } from './injectCharacterProps.js';

function attrToProps(attr) {
  const props = {};
  attr && attr.forEach((attr) => (props[attr.name] = attr.value));
  return props;
}

export default () => {
  return (markdownAST) => {
    const gw2uitypes = ['Skill', 'Trait', 'Item'];

    visit(markdownAST, (node) => {
      const componentType = node.name;

      if (gw2uitypes.includes(componentType)) {
        const resolvedProps = resolve(
          componentType,
          attrToProps(node.attributes),
        );

        node.attributes = [
          ...node.attributes,
          { type: 'mdxJsxAttribute', name: 'id', value: resolvedProps.id },
        ];
      } else if (componentType === 'Character') {
        const oldAttributeNode = node.attributes.find(
          (attr) => attr.name === 'gear',
        );
        const gearRaw = oldAttributeNode?.value;
        const gear = JSON.parse((gearRaw || '').replaceAll('\\', ''));
        const injectedProps = injectCharacterProps(gear);

        if (injectedProps) {
          node.attributes = [
            ...node.attributes.filter((attr) => attr.name !== 'gear'),
            {
              ...oldAttributeNode,
              value: JSON.stringify(injectedProps),
            },
          ];
        }
      }
    });

    return markdownAST;
  };
};
