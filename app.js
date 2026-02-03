

//  Custom React
// const React = {
//     createElement:function(tag,attributes,children){
//         const element = document.createElement(tag);
//         element.textContent = children;
//         for(const key in attributes){
//             if(key=='style'){
//                 Object.assign(element.style,attributes.style);
//             }
//             else{
//                 element[key] = attributes[key];
//             }
//         }
//         return element;
//     }
// };



//         const ReactDOM={
//             render:function(child,parent){
//                 parent.append(child);
//             }
//         }

        // const element1 = React.createElement("h1",{className:"element1",id:"first",style:{
        //     fontSize:"30px",backgroundColor:"orange",color:"white"}},"Hello Coder Army");
 
        // const element2 = React.createElement("h2",{className:"element1",id:"second",style:{
        //     fontSize:"20px",backgroundColor:"pink",color:"green"}},"Strike is launched");    
    
        //     const root = document.getElementById('root');
        //     ReactDOM.render(element1,root);
        //     // ReactDOM.render(element2,root);




        // const React = {
        //     createElement: function(type,props,children){
        //         return{
        //             type:type,
        //             props:{
        //                 ...props,
        //                 children:children
        //             }
        //         }
        //     }
        // }

  

        // // const reactElement={
        // //     type:'h1',
        // //     props:{
        // //         className:"element",
        // //         id:"first",
        // //         style:{fontSize:"30px",backgroundColor:"orange",color:"white"},
        // //         children:"Hello Coder Army"
        // //     }
        // // }






        const ReactDOM={
            render:function(reactElement,root){
                root.innerHTML='';
                const element = document.createElement(reactElement.type);
                const {props} = reactElement;
                for(const key in props){
                    if(key==='children'){
                        element.textContent = props[key];
                    }
                    else if(key==='style'){
                        Object.assign(element.style,props.style);
                    }
                    else{
                        element[key]=props[key];
                    }
                }
                root.append(element);
            }
        }





        const element1 = React.createElement("h1",{className:"element1",id:"first",style:{
            fontSize:"30px",backgroundColor:"orange",color:"white"}},"Hello Coder Army");
 
        const element2 = React.createElement("h2",{className:"element1",id:"second",style:{
            fontSize:"20px",backgroundColor:"pink",color:"green"}},"Strike is launched");    
    



        const div = React.createElement('div',null,element1,element2,"Hello Coders");
        
        
        // Main Container
        const root = ReactDOM.createRoot(document.getElementById('root'));


        root.render(div);


















        
// const React = {
//     createElement: function(type,props,children){
   
//         return {
//             type:type,
//                 props:{
//                 ...props,
//             children:children
//         }
//         }
//      }
// }


// // const reactElement = {
// //     type:'h1',
// //     props:{
// //         className:"element",
// //         id:"first",
// //         style:{fontSize:"30px",backgroundColor:"orange",color:"white"},
// //         children: "Hello Coder Army"
// //     }
// // }


// const ReactDOM = {
//     render: function(reactElement,root){
       
//        root.innerHTML = '';

//        const element =  document.createElement(reactElement.type);
        
//       const {props} = reactElement;

//       for(const key in props){
//         if(key==='style'){
//             Object.assign(element.style,props.style);
//         }
//         else if(key==='children'){
//             element.textContent = props[key];
//         }
//         else{
//             element[key] = props[key];
//         }
//       }

//       root.append(element);
//     }
// }

// const element1 = React.createElement("h1",{className:"element",id:"first",style:{fontSize:"30px",backgroundColor:"orange",color:"white"}},"Hello Coder Army");
// const element2 = React.createElement('h2',{className:"element",id:"second",style:{fontSize:"20px",backgroundColor:"pink",color:"green"}},"Strike is launched");


// const div = React.createElement('div',null,
//     React.createElement("h1",{className:"element",id:"first",style:{fontSize:"30px",backgroundColor:"orange",color:"white"}},"Hello Coder Army"),
//     React.createElement('h2',{className:"element",id:"second",style:{fontSize:"20px",backgroundColor:"pink",color:"green"}},"Strike is launched"),
// );



// // Main container to render react elements
// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(div);
// console.log(div);