import React from "react";
import {Dialog, DialogTitle, DialogContent, Button} from "@material-ui/core";

export default class Test extends React.Component {
    state = {
        open: false
    };

    handleClick = e => this.setState({open: true});
    handleClose = e => this.setState({open: false});

    render() {
        return (
            <React.Fragment>
                <Button color={"secondary"} onClick={this.handleClick}>Click Me</Button>
                <Dialog open={this.state.open}>
                    <DialogTitle>Some title</DialogTitle>
                    <Button style={{margin: 16}} variant="outlined" onClick={this.handleClose}>Close</Button>
                    <DialogContent>
                        Some content
                    </DialogContent>
                </Dialog>
            </React.Fragment>);
    }
}