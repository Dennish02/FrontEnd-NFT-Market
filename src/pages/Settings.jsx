import React, { useEffect } from "react";
import NavBar from "../componentes/home/NavBar";
import { Link } from "react-router-dom";
import { cambiarImagen, usuarioActual } from "../../redux/actions/actionUSER";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import io from "socket.io-client";
let socket;

function Settings() {
  const dispatch = useDispatch();
  const params = window.location.href;
  const usuario = useSelector((state) => state.usuario);
  //const navigate = useNavigate();

  useEffect(() => {
    // dispatch(usuarioActual());
    socket = io(import.meta.env.VITE_BACKEND_URL);
    socket.emit("Settings", params);
  }, []);

  useEffect(() => {
    //recibir la respuesta del back
    socket.on("nftUser2", () => {
      dispatch(usuarioActual());
    });
  });

  function handleImage(image) {
    dispatch(cambiarImagen(image));
  }
  return (
    <div className="contSettings">
      <NavBar usuario={usuario} />
      <div className="contSettings-info">
        <div className="enlace">
          
          <Link  to="/update-password">
            <button >Change password</button>
          </Link>
        </div>
        <div className="contFile">
          <p>cambiar foto de perfil</p>
          <label className="labelmiinput" htmlFor="mifile">Subir img</label>
          <input
            type="file"
            name="image"
            className="file"
            id='mifile'
            onChange={(e) => handleImage(e.target.files[0])}
          />
        </div>
        
      </div>
    </div>
  );
}

export default Settings;
