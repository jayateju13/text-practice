var cart=[];
console.log(cart);

function additem(name,price,quantity)
{
    var item={
        name:name,
        Price:price,
        quantity:quantity,

    };
    cart.push(item);
}
additem("pen",10,2);
additem("crayons",10,2);
additem("notebook",50,1);
additem("pencil",5,5);
console.log(cart);


// function view cart
function viewcart(){
console.log("items in your cart");
console.log("-------------");
for(var i=0;i<cart.length;i++)
    {
    console.log((i+1)+"."+cart[i].name+"-Rs."+cart[i].price+"X"+cart[i].quantity);
    }
console.log("----------");
    
}
// calculate
    function calculateTotal()
    {
    var total=0;
    for(var i=0;i<cart.length;i++)
    {
        total+=cart[i].price*cart[i].quantity;
    }
        return total;
    }
    function removeitem(itemName)
    {
        var found=false;
        for(var i=0;i<cart.length;i++)
        {
            if(cart[i].name===itemName)
            {
                cart.splice(i,1);
                found=true;
                break;
            }
     
        }
        if(found)
        {
            console.log(itemName+"removed from the cart");

        }
        else{
            console.log(itemName+"not found in the cart");
        }
    }
    
   
   
viewcart();

console.log("Total Amount: Rs."+calculateTotal());
removeitem("pencil");
viewcart();
console.log("Total Amount after removal:Rs."+calculateTotal());

