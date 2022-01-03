import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { string } from 'prop-types';
import { woops } from './axiosTest';

export const a = () => {
    return 1+2;
}

const Form = (props) => {

    useEffect(() => {
        a();
        // woops();
    }, []);

    const [count, setCount] = React.useState("");
    const [size, setSize] = useState(0);

    return (
        <div>
            <input 
                className='myInput'
                value={count}
                onChange={(e) => setCount(e.target.value)}
            />
            <button 
                className="myClick" 
                onClick={() => setSize(size + 1)}>
                    Click
            </button>
            {
                // اینجا مقدار تعداد اندیس مورد نظر را تست میکنم
            }
            <p className="displayUsers">users</p>
            {(props.users.length === 3) && 
            props.users.map((user, index) => (
                <div className="loop" key={index}>
                    <p>{user.first_name}</p>
                </div>
            ))}
        </div>
        );
}

// در این قسمت اعتبار سنجی پراپ کامپوننت انجام میشود
Form.propTypes = {
    success: PropTypes.string.isRequired,
    users: PropTypes.arrayOf(
        PropTypes.shape({
          first_name: PropTypes.string.isRequired,
          last_name: PropTypes.string.isRequired,
        })
    ).isRequired,
}

// Form.propTypes = {
//     users: PropTypes.arrayOf(
//       PropTypes.shape({
//         first_name: PropTypes.string.isRequired,
//         last_name: PropTypes.string.isRequired,
//       })
//     ).isRequired,
// };

export default Form;