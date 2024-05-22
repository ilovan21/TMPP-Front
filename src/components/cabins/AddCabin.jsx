// src/components/cabins/AddCabin.jsx
import React, { useState } from 'react';
import { addVipCabin, addStandardCabin } from '../utils/ApiFunctions';

const AddCabin = () => {
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [isBooked, setIsBooked] = useState(false);
	const [photo, setPhoto] = useState(null);
    const [numberOfRooms, setNumberOfRooms] = useState('');
    const [hasPrivatePool, setHasPrivatePool] = useState(false);
    const [hasJacuzzi, setHasJacuzzi] = useState(false);
    const [hasSauna, setHasSauna] = useState(false);
    const [hasFireplace, setHasFireplace] = useState(false);
    const [hasKitchen, setHasKitchen] = useState(false);
    const [hasBathroom, setHasBathroom] = useState(false);

    const handleLocationChange = (e) => setLocation(e.target.value);
    const handlePriceChange = (e) => setPrice(e.target.value);
    const handleIsBookedChange = (e) => setIsBooked(e.target.checked);
	const handlePhotoChange = (e) => setPhoto(e.target.files[0]);
    const handleNumberOfRoomsChange = (e) => setNumberOfRooms(e.target.value);
    const handleHasPrivatePoolChange = (e) => setHasPrivatePool(e.target.checked);
    const handleHasJacuzziChange = (e) => setHasJacuzzi(e.target.checked);
    const handleHasSaunaChange = (e) => setHasSauna(e.target.checked);
    const handleHasFireplaceChange = (e) => setHasFireplace(e.target.checked);
    const handleHasKitchenChange = (e) => setHasKitchen(e.target.checked);
    const handleHasBathroomChange = (e) => setHasBathroom(e.target.checked);

    const handleVipSubmit = async () => {
        const success = await addVipCabin( location, price, isBooked, photo,numberOfRooms, hasPrivatePool, hasJacuzzi, hasSauna);
        if (success) {
            alert('VIP cabin added successfully');
        } else {
            alert('Error adding VIP cabin');
        }
    };

    const handleStandardSubmit = async () => {
        const success = await addStandardCabin(location, price, isBooked, photo, numberOfRooms, hasFireplace, hasKitchen, hasBathroom);
        if (success) {
            alert('Standard cabin added successfully');
        } else {
            alert('Error adding standard cabin');
        }
    };

    return (
        <div>
            <h1>Add VIP Cabin</h1>
            <form>
                <div>
                    <label>Location:</label>
                    <input type="text" value={location} onChange={handleLocationChange} />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" value={price} onChange={handlePriceChange} />
                </div>
                <div>
                    <label>
                        Is Booked:
                        <input type="checkbox" checked={isBooked} onChange={handleIsBookedChange} />
                    </label>
                </div>
				<div>
                    <label>Photo:</label>
                    <input type="file" onChange={handlePhotoChange} />
                </div>
                <div>
                    <label>Number of Rooms:</label>
                    <input type="number" value={numberOfRooms} onChange={handleNumberOfRoomsChange} />
                </div>
                <div>
                    <label>
                        Has Private Pool:
                        <input type="checkbox" checked={hasPrivatePool} onChange={handleHasPrivatePoolChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Has Jacuzzi:
                        <input type="checkbox" checked={hasJacuzzi} onChange={handleHasJacuzziChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Has Sauna:
                        <input type="checkbox" checked={hasSauna} onChange={handleHasSaunaChange} />
                    </label>
                </div>
                <button type="button" onClick={handleVipSubmit}>Add VIP Cabin</button>
            </form>

            <h1>Add Standard Cabin</h1>
            <form>
                <div>
                    <label>Location:</label>
                    <input type="text" value={location} onChange={handleLocationChange} />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" value={price} onChange={handlePriceChange} />
                </div>
                <div>
                    <label>
                        Is Booked:
                        <input type="checkbox" checked={isBooked} onChange={handleIsBookedChange} />
                    </label>
                </div>
				<div>
                    <label>Photo:</label>
                    <input type="file" onChange={handlePhotoChange} />
                </div>
                <div>
                    <label>Number of Rooms:</label>
                    <input type="number" value={numberOfRooms} onChange={handleNumberOfRoomsChange} />
                </div>
                <div>
                    <label>
                        Has Fireplace:
                        <input type="checkbox" checked={hasFireplace} onChange={handleHasFireplaceChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Has Kitchen:
                        <input type="checkbox" checked={hasKitchen} onChange={handleHasKitchenChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Has Bathroom:
                        <input type="checkbox" checked={hasBathroom} onChange={handleHasBathroomChange} />
                    </label>
                </div>
                <button type="button" onClick={handleStandardSubmit}>Add Standard Cabin</button>
            </form>
        </div>
    );
};

export default AddCabin;
