import React from 'react'
import { useState,useEffect } from 'react'
import './Navbar.css'
export const Navbar = (props) => {
	const [zarf,setZarf]=useState(0)
	useEffect(
        () => {
			let t=0
			props.plist.forEach(element => {
				t=t+element.count
			 });
			 setZarf(t)
        }, [props]
    )
	return (
		<div> 
			<nav className="navbar navbar-findcond  ">
				<div className="container row">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
					</div>
					<div className='col-md-1  '  style={{'margin-top': '15px'}}>{zarf}</div>

					<div className="collapse navbar-collapse  " id="navbar">

						<ul className="nav navbar-nav navbar-right">
							<li className="active"><a href="kid">کودک <span className="sr-only">(current)</span></a></li>
							<li className=""><a href="women">زن <span className="sr-only">(current)</span></a></li>
							<li className=""><a href="men">مرد <span className="sr-only">(current)</span></a></li>
							<li className=""><a href="/">خانه <span className="sr-only">(current)</span></a></li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	)
}
