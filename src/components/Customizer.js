import React from 'react';
import Features from './Features'

class Customizer extends React.Component {

    render() {
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <Features
                    features={this.props.features}
                    updateFeature={this.props.updateFeature}
                    selected={this.props.selected}
                    usCurrency={this.props.usCurrency}
                />
            </form>
        )
    }
}

export default Customizer