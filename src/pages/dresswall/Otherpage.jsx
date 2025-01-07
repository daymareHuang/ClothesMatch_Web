import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap'
import '../../css/Dressify.css'
import '../../css/dresswall.css'
import MyLayout from '../../layouts/MyLayout'
import AddAvatar from "../../components/AddAvatar";
import { Tabs, Tab } from 'react-bootstrap';
import axios from 'axios';


function Otherpage() {
    const data = JSON.parse(localStorage.getItem('user'))

    return (
        <div>Otherpage</div>
    )
}

export default Otherpage