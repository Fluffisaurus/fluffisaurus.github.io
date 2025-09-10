interface NodeDimensions {
  width: number,
  height: number
}

const computeNodeStyle = (node: HTMLElement): NodeDimensions => {
  const nodeCmpStyle = getComputedStyle(node);
  const nodeMargin = {
    width: parseInt(nodeCmpStyle.marginLeft) + parseInt(nodeCmpStyle.marginRight),
    height: parseInt(nodeCmpStyle.marginTop) + parseInt(nodeCmpStyle.marginBottom),
  };
  const nodePadding = {
    width: parseInt(nodeCmpStyle.paddingLeft) + parseInt(nodeCmpStyle.paddingRight),
    height: parseInt(nodeCmpStyle.paddingTop) + parseInt(nodeCmpStyle.paddingBottom),
  };
  return {
    width: node.offsetWidth - nodeMargin.width - nodePadding.width,
    height: node.offsetHeight - nodeMargin.height - nodePadding.height
  } as NodeDimensions
}

export default computeNodeStyle;