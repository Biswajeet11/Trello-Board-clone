import React from 'react';
import TrelloList from './components/TrelloList'
import { connect } from 'react-redux'
import TrelloActionButton from './components/TrelloActionButton';
class App extends React.Component {
  render() {
    const { lists } = this.props;
    return (
      <div>
        <h1>Hello</h1>
        <div style={styles.listsContainer}>
          {lists.map((list) => {
            return <TrelloList key={list.id} title={list.title} cards={list.cards} />
          })}
          <TrelloActionButton list/>
        </div>
      </div>
    );
  }
}
const styles = {
  listsContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 8
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})
export default connect(mapStateToProps)(App);
