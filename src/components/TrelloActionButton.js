import React from 'react'
import Icon from '@material-ui/core/Icon'
import TextArea from 'react-textarea-autosize'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import {addList} from '../actions/listActions'
class TrelloActionButton extends React.Component {

    state = {
        formOpen: false,
        text: ''
    }

    openForm = () => {
        this.setState({
            formOpen: true
        })
    }

    closeForm = () => {
        this.setState({
            formOpen: false
        })
    }

    handleInputChange = (e) => {
        this.setState({ text: e.target.value })
    }

    handleAddList = () => {
        const { dispatch } = this.props
        const { text } = this.state
        if (text) {
            dispatch(addList(text))
        }
        return;
    }

    renderAddButton = () => {
        const { list } = this.props
        const buttonText = list ? 'Add another list' : 'Add another card'
        const buttonTextOpacity = list ? 1 : 0.5
        const buttonTextColor = list ? "white" : "inherit"
        const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit"

        return (
            <div
                onClick={this.openForm}
                style={{
                    ...styles.openForButtonGroup,
                    opacity: buttonTextOpacity,
                    color: buttonTextColor,
                    backgroundColor: buttonTextBackground
                }}>
                <Icon>Add</Icon>
                <p>{buttonText}</p>
            </div>
        )
    }

    renderForm = () => {
        const { list } = this.props
        const placeholder = list ? 'Enter list title....' : 'Enter a title for card'
        const buttonTile = list ? 'Add list' : 'Add Card'
        return <div>
            <Card style={{
                overflow: "visible",
                minHeight: 80,
                minWidth: 272,
                padding: "6px 8px 2px"
            }}>
                <TextArea
                    placeholder={placeholder}
                    autoFocus
                    onBlur={this.closeForm}
                    value={this.state.text}
                    onChange={this.handleInputChange}
                    style={{
                        resize: "none",
                        width: "100%",
                        outline: "none",
                        border: "none"
                    }}
                />
            </Card>
            <div style={styles.formButtonGroup}>
                <Button
                onMouseDown={this.handleAddList}
                    variant="contained"
                    style={{ color: "white", backgroundColor: "#5aac44" }}>
                    {buttonTile}{" "}
                </Button>
                <Icon style={{ marginLeft: 0, cursor: "pointer" }}>close</Icon>
            </div>
        </div>
    }

    render() {
        console.log(this.props)
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    }
}
const styles = {
    openForButtonGroup: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: 3,
        height: 36,
        width: 272,
        paddingLeft: 10,
    },
    formButtonGroup: {
        marginTop: 0,
        display: "flex",
        alignItems: "center"
    }
}
export default connect()(TrelloActionButton) 