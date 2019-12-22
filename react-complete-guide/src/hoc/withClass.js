import React from 'react';

// const withClass = props => (
//     <div className={props.classes}>{props.children}</div>
// );

// another way
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            {/* here ...props is passed by distributing thema as new key 
            value pair, as required by the component. Like name="max" age="28" */}
            <WrappedComponent {...props} />
        </div>
    );
};

export default withClass;