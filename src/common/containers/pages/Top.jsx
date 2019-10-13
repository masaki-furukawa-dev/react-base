import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class Top extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <Body>
                top
            </Body>
        );
    }
}

const mapStateToProps = store => {
    return {
    }
};

const connectedTop = connect(mapStateToProps)(Top);
export { connectedTop as Top };

const Body = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
