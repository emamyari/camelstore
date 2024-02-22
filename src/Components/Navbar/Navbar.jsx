import React from 'react'
import './Navbar.css'
export const Navbar = () => {
  return (
    <div>
       <nav className="navbar navbar-findcond navbar-fixed-top">
    <div className="container">
		<div className="navbar-header">
			<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
				<span className="sr-only">Toggle navigation</span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
			</button>
			{/* <a className="navbar-brand" href="#">Findcond</a> */}
		</div>
		<div className="collapse navbar-collapse" id="navbar">
			<ul className="nav navbar-nav navbar-right">
          <li className="active"><a href="#">کودک <span className="sr-only">(current)</span></a></li>
          <li className="active"><a href="#">زن <span className="sr-only">(current)</span></a></li>
          <li className="active"><a href="#">مرد <span className="sr-only">(current)</span></a></li>
          <li className="active"><a href="#">خانه <span className="sr-only">(current)</span></a></li>
				{/* <li className="dropdown">
					<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Admin <span className="caret"></span></a>
					<ul className="dropdown-menu" role="menu">
						<li><a href="#">Geri bildirim</a></li>
						<li><a href="#">Yardım</a></li>
						<li className="divider"></li>
						<li><a href="#">Ayarlar</a></li>
						<li><a href="#exit">Çıkış yap</a></li>
					</ul>
				</li> */}
			</ul>
			{/* <form className="navbar-form navbar-right search-form" role="search">
				<input type="text" className="form-control" placeholder="Search" />
			</form> */}
		</div>
	</div>
</nav>
    </div>
  )
}
