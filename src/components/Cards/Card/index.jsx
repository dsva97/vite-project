import React from 'react'

/**
	"id": 1,
	"name": "Firulais",
	"description": "Perrito travieso",
	"img": "http://adoptame.ga/media/img/pets/richard-brutyo-Sg3XwuEpybU-unsplash_1_rx9hMR9.jpg",
	"age": 1,
	"sex": "Macho",
	"size": "Mediano",
	"city": "Lima",
	"is_active": true,
	"created_at": "2022-09-25T05:04:28.296704Z",
	"updated_at": "2022-09-25T05:14:14.867395Z",
	"owner": 1
 */

export const Card = ({ img, name, age }) => {
	return (
		<div>
			<h4>{name} - {age}</h4>
			<img src={img} alt="" />
		</div>
	)
}
