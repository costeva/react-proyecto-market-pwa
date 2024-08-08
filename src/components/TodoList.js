import React from "react";
import '../style/todoList.scss';
function TodoList(props) {
  return (
    <div className="row">
      <div className="col-12 col-md-6">
        <div className="card cardStyle m-2">
          <div className="p-2 text-center text-md-left">
        <h1>MarketList</h1>
<p>
  Genera tu lista de supermercado haciendo click en el  icono des lista y luego anda tildando o borrando a medida que vayas comprando.
</p>
</div>

    <img src="market.png"/>
</div>
</div>
    <div className=" col-12 col-md-6">
    
        <div className="card cardStyle  m-2">
      <ul className="p-2">{props.children}</ul>
      </div>
     
    </div>
    
    
    
    

    
    </div>
   
   
  );
}

export { TodoList };
