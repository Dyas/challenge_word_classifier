function init(e){var t=e.toString().split(";");additionsTree=buildTree(t[0]),wordPartsTree=buildTree(t[1])}function buildTree(e){var t=e.split(LinesSeparator),i={Root:new Node};return processLines(i,t),i}function processLines(e,t){for(var i=0;i<t.length;i++){var n=t[i];processLine(e.Root,n,0)}}function processLine(e,t,i){for(var n=i;n<t.length;n++){var r=t[n],d=n+1<t.length&&(t[n+1]===IsEndIndicator||slnc.indexOf(t[n+1])>-1);d&&n++;var o=new Node(r,d,t[n]);e.children.push(o);var a=n+1<t.length&&t[n+1]===BeginSubNodeIndicator;a&&(n=processLine(o,t,n+2));var s=n+1<t.length&&t[n+1]===EndSubNodeIndicator;if(s)return n+1}}function test(e){var t=!1;return"string"==typeof e&&null!==e&&""!==e&&(t=testSafe(e.toLowerCase(),!0)),t}function testSafe(e,t){var i=!1,n=e.length,r=GetAdditionNode(n);if(null==r||r.isEnd)i=find(wordPartsTree,e).getIsFirst();else{additionNode=r.children[0];var d=n-GetAdditionSize(additionNode),o=e.substr(0,d),a=find(wordPartsTree,o);null!=a&&(i=TestNode({additionNode:additionNode,node:a,isFirstCut:t,value:e,partSize:d}))}return i}function TestNode(e){var t;return t=e.additionNode.isEnd?TestLeafNode(e.node,e.isFirstCut):TestNotLeafNode({node:e.node,isFirstCut:e.isFirstCut,value:e.value,partSize:e.partSize})}function TestLeafNode(e,t){var i;return i=t&&null!=e&&e.getIsFirst()&&e.getIsLast()?!0:!t&&null!=e&&e.getIsLast()?!0:!1}function TestNotLeafNode(e){var t;return t=e.isFirstCut&&null!=e.node&&!e.node.getIsFirst()?!1:e.isFirstCut||null==e.node||e.node.getIsMiddle()?testSafe(e.value.substr(e.partSize),!1):!1}function GetAdditionNode(e){var t=null,i=additionsTree.Root.indexOf(String.fromCharCode(e+CharOffset));return i>-1&&(t=additionsTree.Root.children[i]),t}function GetAdditionSize(e){return e.value.charCodeAt()-CharOffset}function find(e,t){for(var i=null,n=e.Root,r=0;r<t.length;r++){var d=t[r],o=n.indexOf(d);if(0>o)break;(n=n.children[o]).isEnd&&r===t.length-1&&(i=n)}return i}var LinesSeparator="Y",IsEndIndicator="Z",BeginSubNodeIndicator="[",EndSubNodeIndicator="]",Node=function(e,t,i){var n=this;this.children=[],this.value=e,this.isEnd=t||!1,this.tag=i||null,this.indexOf=function(e){for(var t=-1,i=0;i<n.children.length;i++){var r=n.children[i];if(r.value===e){t=i;break}}return t},this.getIsFirst=function(){var e=4,t=n.validateNodeTag(e);return t},this.getIsMiddle=function(){var e=2,t=n.validateNodeTag(e);return t},this.getIsLast=function(){var e=1,t=n.validateNodeTag(e);return t},this.validateNodeTag=function(e){var t;return t=n.isEnd&&null!=i?0!==(slnc.indexOf(i)&e):!1}},additionsTree,wordPartsTree,slnc=["A","B","C","D","E","F","G","H"],CharOffset=96;

module.exports = 
{
	init:
		function(data) { init(data); },
 	test:
		function(value) { return test(value); }
}