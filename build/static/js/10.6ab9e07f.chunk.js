(this.webpackJsonpKVPY_APPLICATION_WINDOW=this.webpackJsonpKVPY_APPLICATION_WINDOW||[]).push([[10],{100:function(e,a,t){e.exports=t.p+"static/media/mylari.a7a46d97.jpg"},113:function(e,a,t){},114:function(e,a,t){},127:function(e,a,t){"use strict";t.r(a);var l=t(13),c=t(1),m=t.n(c),n=(t(113),t(17)),s=t(107),i=t(26),r=(t(114),t(100)),o=t.n(r),d=t(12),u=t(2);var E=function(e){var a=e.menuItems,t=e.hotel,c=a.itemsName.split(","),s=Object(d.b)(),r=Object(l.a)(s,2),E=r[0],v=E.user,N=E.cart,_=r[1],p=Object(u.g)();console.log(a,t),console.log("cart",N);var g=function(e,l){""==v?p.push("/login"):(_({type:"addToCart",data:{item:e.target.id,itemCost:a.itemCost,itemCount:1}}),_({type:"cartHotel",data:t}))};return m.a.createElement("div",null,m.a.createElement("div",{className:"item_list"},m.a.createElement("div",{className:"item title_padding"},m.a.createElement("div",{className:"recommended"},"Recommended",m.a.createElement("div",{className:"num_items"},c.length," Items"))),c.map((function(e){return m.a.createElement("div",{className:"item"},m.a.createElement("div",{className:"item_info"},m.a.createElement("div",{className:"item_rate"},m.a.createElement("div",{className:"cusineNonVeg"},m.a.createElement("div",{className:"innerboxNonVeg"})),m.a.createElement("span",{style:{color:"#fc8019",marginLeft:"10px",fontSize:"13px"}},m.a.createElement(n.h,null),"Best Seller")),m.a.createElement("div",{className:"itemname"},e),m.a.createElement("div",{className:"itemcost"},m.a.createElement(i.a,null),a.itemCost)),m.a.createElement("div",{className:"item_profile"},m.a.createElement("img",{src:o.a,className:"item_image"}),m.a.createElement("div",{className:"add_to_cart_actions"},m.a.createElement("div",{id:e,onClick:function(e){g(e)}},"-"),m.a.createElement("div",null,"1"),m.a.createElement("div",{id:e,onClick:function(e){g(e)}},"+"))))}))))},v=t(10);a.default=function(){var e=Object(d.b)(),a=Object(l.a)(e,2),t=a[0],c=t.restaurents,r=t.cart,o=(a[1],Object(u.h)().name),N=c.findIndex((function(e){return o===e.name}));console.log(c[N].menu);var _=r.reduce((function(e,a){return a.itemCost+e}),0);return console.log(_),m.a.createElement("div",null,m.a.createElement("div",{className:"restaurent_menu"},m.a.createElement("div",{className:"restaurent_col1"},m.a.createElement("div",{className:"menu_list menu_title"},"Match Day Special Combos"),m.a.createElement("div",{className:"menu_list"},"Combos"),m.a.createElement("div",{className:"menu_list"},"Sandwitches"),m.a.createElement("div",{className:"menu_list"},"Burger"),m.a.createElement("div",{className:"menu_list"},"Pizza Veg 7 Inch"),m.a.createElement("div",{className:"menu_list"},"Pizza Non-Veg 7 Inch"),m.a.createElement("div",{className:"menu_list"},"Pizza Veg 10 Inch"),m.a.createElement("div",{className:"menu_list"},"Pizza Non-Veg 10 Inch"),m.a.createElement("div",{className:"menu_list"},"Veg Starter"),m.a.createElement("div",{className:"menu_list"},"Non Veg Starter"),m.a.createElement("div",{className:"menu_list"},"Baked pasta")),m.a.createElement("div",{className:"restaurent_col2"},m.a.createElement(E,{menuItems:c[N].menu,hotel:c[N]})),m.a.createElement("div",{className:"restaurent_col3"},0!=r.length?m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"col3_title"},"Cart"),m.a.createElement("div",{className:"col3_desc"},"from ",m.a.createElement("span",{style:{color:"blue"}},o)),m.a.createElement("div",{className:"col3_count_num",style:{fontSize:"13px"}},r.length," ITEM"),m.a.createElement("div",{className:"col3_products_bill",style:{margin:"0"}},m.a.createElement("div",{className:"products",style:{alignItems:"flex-start",flexDirection:"column"}},r.map((function(e){return m.a.createElement("div",{className:"products",style:{width:"100%",marginBottom:"10px"}},m.a.createElement("div",{className:"prod_left",style:{justifyContent:"flex-start"}},m.a.createElement("div",{className:"cusineNonVeg"},m.a.createElement("div",{className:"innerboxNonVeg"})),m.a.createElement("div",{className:"product_name"},e.item)),m.a.createElement("div",{className:"prod_right"},m.a.createElement("div",{className:"products_actions",style:{marginRight:"15px"}},m.a.createElement("div",{className:"action"},"-"),m.a.createElement("div",{className:"action"},"1"),m.a.createElement("div",{className:"action"},"+")),m.a.createElement("div",{className:"col3_product_cost"},m.a.createElement("div",null,m.a.createElement(i.a,null)),m.a.createElement("div",null,e.itemCost))))})))),m.a.createElement("div",{className:"col3_subtotal"},m.a.createElement("div",{className:"col3_col1"},m.a.createElement("div",null,"Subtotal"),m.a.createElement("div",{style:{fontSize:"12px",color:"#535665",fontWeight:"300",margin:"5px 0px"}},"Extra charges may apply")),m.a.createElement("div",{className:"col3_col1"},m.a.createElement(s.b,null),_)),m.a.createElement(v.b,{to:"/cart",className:"col3_button",style:{width:"100%"}},"CHECKOUT ",m.a.createElement(n.b,{style:{marginLeft:"10px"}}))):m.a.createElement("div",{className:"empty_cart_menu"},m.a.createElement("div",{className:"col3_title"},"Cart Empty"),m.a.createElement("img",{src:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0",className:"empty_image"}),m.a.createElement("div",{className:"empty_cart_text"},"Good food is always cooking! Go ahead, order some yummy items from the menu.")))))}}}]);
//# sourceMappingURL=10.6ab9e07f.chunk.js.map