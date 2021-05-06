//include images into your bundle
import React from "react";
import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";
//create your first component
export function Home() {
	return (
		<>
			<Navbar></Navbar>
			<Jumbotron></Jumbotron>
			<div className="row">
				{" "}
				<Card></Card>
				<Card></Card>
				<Card></Card>
				<Card></Card>
			</div>
		</>
	);
}
