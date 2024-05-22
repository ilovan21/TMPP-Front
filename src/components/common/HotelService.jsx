import React from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import Header from "./Header"

const HotelService = () => {
	return (
		<>
			<div className="mb-2">
				<Header title={"Our Services"} />

				<Row className="mt-4">
					<h4 className="text-center">
						Services at <span className="hotel-color"> Cabin </span> Getaways
					</h4>
				</Row>
				<hr />

				<Row xs={1} md={2} lg={3} className="g-4 mt-2">
					<Col>
						<Card>
							<Card.Body>
								<Card.Title className="hotel-color">
									 Availability
								</Card.Title>
								<Card.Text>Find and Book from a Wide Selection of Available Cabins in Various Breathtaking Locations.</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card>
							<Card.Body>
								<Card.Title className="hotel-color">
									 Diversity
								</Card.Title>
								<Card.Text>Explore different types of cabins, such as VIP cabins or standard cabins.</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card>
							<Card.Body>
								<Card.Title className="hotel-color">
								 Special Offers
								</Card.Title>
								<Card.Text> Receive notifications about special offers to make sure you never miss out on a great opportunity.</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</div>
			<hr />
		</>
	)
}

export default HotelService
