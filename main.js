var menu_items = ["BBQ Pizza", "Chikentikka Pizza", "Veg Farm Pizza", "Non-Veg Loaded Pizza", "Paneer-Tikka Pizza"];

function getMenu(){
    var htmlData;
    htmlData = "<ol class='menuList'>";
    menu_items.sort();

    for(var i=0;i<menu_items.length;i++){
        htmlData = htmlData+ '<li>' + menu_items[i] + '</li>';
    }
    htmlData = htmlData + "</ol>";
    document.getElementById("display_menu").innerHTML = htmlData;

}

function add_item(){
    var htmlData;
    var item=document.getElementById("add_item").value;
    menu_items.push(item);
    menu_items.sort();
    htmlData = "<section class='cards'>";

    for(var i=0;i<menu_items.length;i++){
        htmlData = htmlData + "<div class='card' + <img src='images/image.jpg'/>" + menu_items[i];
    }
    htmlData = htmlData + "</section>";
    document.getElementById("display_addMenu").innerHTML = htmlData;
}

