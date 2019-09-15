import React from 'react';
import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';
import { Droppable } from 'react-beautiful-dnd'
const TrelloList = ({ title, cards, listId }) => {
    return (
        <Droppable droppableId={String(listId)}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    style={styles.container}>
                    <h3>{title}</h3>
                    {cards.map((card, index) => (
                        <TrelloCard key={card.id}
                            text={card.text}
                            id={card.id}
                            index={index} />
                    ))
                    }
                    <TrelloActionButton listId={listId} />
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
};
const styles = {
    container: {
        backgroundColor: '#dfe3e6',
        borderRadius: 3,
        width: 300,
        padding: 8,
        height: "100%",
        marginRight: 8
    }
}
export default TrelloList;