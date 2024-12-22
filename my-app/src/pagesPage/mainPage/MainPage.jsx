import React, { useState } from 'react';

function App() {
    const [name, setName] = useState('');
    const [namesList, setNamesList] = useState([]);
    const [newName, setNewName] = useState('');

    const handleAddClick = () => {
        if (name.trim() !== '') {
            setNamesList([...namesList, name]);
            setName('');
        }
    };

    const handleChangeName = (index) => {
        if (newName.trim() !== '') {
            const updatedNamesList = [...namesList];
            updatedNamesList[index] = newName;
            setNamesList(updatedNamesList);
            setNewName('');
        }
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Введите имя"
                />
                <button
                    onClick={handleAddClick}
                    disabled={!name.trim()}
                >
                    Добавить
                </button>
            </div>

            <div>
                {namesList.length === 0 ? (
                    <p>Список пуст</p>
                ) : (
                    <ul>
                        {namesList.map((item, index) => (
                            <li key={index}>
                                {item}
                                <input
                                    type="text"
                                    value={newName}
                                    onChange={(e) => setNewName(e.target.value)}
                                    placeholder="Введите новое имя"
                                />
                                <button
                                    onClick={() => handleChangeName(index)}
                                    disabled={!newName.trim()}
                                >
                                    Поменять
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default App;