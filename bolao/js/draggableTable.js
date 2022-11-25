var row;
var sourceTableId;
var targetTableId;

function dragStart() {
    row = event.target;
    sourceTableId = event.srcElement.parentNode.id
}

function dragOver() {
    var e = event;
    var targetTableId = e.target.parentNode.parentNode.id;
    e.preventDefault();

    if(sourceTableId == targetTableId ){
        let children = Array.from(e.target.parentNode.parentNode.children);
        if (children.indexOf(e.target.parentNode) > children.indexOf(row))
            e.target.parentNode.after(row);
        else
            e.target.parentNode.before(row);
    }
}

