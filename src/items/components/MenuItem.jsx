import { useNavigate } from "react-router-dom"
import {useState, useEffect} from 'react'
import {items} from '../data/items'
import { ItemList } from "./ItemList"
import { ItemCard } from "./ItemCard"
import { useContext } from "react"
import { AuthContext } from "../../auth/context/AuthContext"


export const MenuItem = () => {
	const { setArbi } = useContext(AuthContext)
	const [e, setE] = useState('')
	const navigate = useNavigate()

	useEffect(()=>{
		const li = document.getElementsByClassName('list-item')
		const list = [...li]
		list.map(item => {
			item.addEventListener('click', ()=>{
				const menuItem = document.querySelector('.menu-item')
				menuItem.classList.toggle('inactive')
				navigate('/dc')
				setArbi(item.innerHTML)
			})
		})


	},[e])
	
	return (
		<div className="menu-item inactive" >
			<ul>
			<h2>Categorías de productos</h2>
				<li className='list-item' >Aro Pistón</li>
				<li className='list-item' >Base Amortiguador</li>
				<li className='list-item' >Bomba Agua</li>
				<li className='list-item' >Bomba Combustible</li>
				<li className='list-item' >Bomba Gasolina</li>
				<li className='list-item' >Buje Horquilla</li>
				<li className='list-item' >Bujía de Precalentamiento</li>
				<li className='list-item' >Cable Sensor</li>
				<li className='list-item' >Collarín Hidráulico</li>
				<li className='list-item' >Conmutador Luces</li>
				<li className='list-item' >Disco de Freno</li>
				<li className='list-item' >Electroventiladores</li>
				<li className='list-item' >Filtros</li>
				<li className='list-item' >Horquilla Suspensión</li>
				<li className='list-item' >Inyectores</li>
				<li className='list-item' >Kit de Embrague</li>
				<li className='list-item' >Llaveros</li>
				<li className='list-item' >Mango Suspensión</li>
				<li className='list-item' >Maza Rueda</li>
				<li className='list-item' >Moldura Arco de Rueda</li>
				<li className='list-item' >Motor de Arranque</li>
				<li className='list-item' >Motoventilador</li>
				<li className='list-item' >Parachoques</li>
				<li className='list-item' >Poleas</li>
				<li className='list-item' >Radiador</li>
				<li className='list-item' >Regulador Árbol de Levas</li>
				<li className='list-item' >Rejilla Cromada</li>
				<li className='list-item' >Repartidor de Frenado</li>
				<li className='list-item' >Resistencia Electroventilador</li>
				<li className='list-item' >Resistencia Motoventilador</li>
				<li className='list-item' >Resortes</li>
				<li className='list-item' >Rótula Suspensión</li>
				<li className='list-item' >Sensor de Posición del Cigüeñal</li>
				<li className='list-item' >Sensor de Velocidad</li>
				<li className='list-item' >Soporte Motor</li>
				<li className='list-item' >Tanque Expansión</li>
				<li className='list-item' >Terminal de Dirección</li>
				<li className='list-item' >Termostatos de Agua</li>
				<li className='list-item' >Volante Bimasa</li>
			</ul>
			<div className="menu-background"></div>
		</div>
	)
}
