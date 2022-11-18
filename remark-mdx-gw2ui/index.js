import visit from 'unist-util-visit';
import resolve from './map-gw2-ids.js';

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
          ...node.attributes.filter((attr) => attr.name !== 'id'),
          { type: 'mdxJsxAttribute', name: 'id', value: resolvedProps.id },
        ];
      }
    });

    return markdownAST;
  };
};
