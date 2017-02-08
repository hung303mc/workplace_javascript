function Handle_Click(event){
  event.stopPropagation();

  var node=event.target;
  var thispath=node.nodename;

  while(node.parentnode){
    node = node.parentnode;
    thispath = node.nodename + ">" + thispath;
  }

  alert(thispath);
}