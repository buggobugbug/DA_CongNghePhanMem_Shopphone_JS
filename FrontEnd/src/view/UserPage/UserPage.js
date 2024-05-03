import React from "react";
import '../user/UserPage.scss'
import { FaUser } from 'react-icons/fa';
import { RiKey2Line } from 'react-icons/ri';
import { withRouter } from "react-router-dom";

class UserPage extends React.Component {
    render() {
        return (
            <div className="Container">
                <div className="UserProfile">
                    <div className="form1">
                        <h1>User Profile</h1>
                        <div className="navinfor">
                            <ul className="nav">
                                <li><a href=""><div className="Icon"><FaUser /></div>User Infor</a></li>
                                <li><a href=""><div className="Icon"><RiKey2Line /></div>Đổi mật khẩu</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="UserInfor">
                    <div className="form">
                        <div className="form__group field">
                            <input type="input" className="form__field" placeholder="Name" name="name" id="name" required />
                            <label htmlFor="name" className="form__label">Họ và tên</label>
                        </div>
                        <div className="form__group field">
                            <input type="input" className="form__field" placeholder="Name" name="name" id="name" required />
                            <label htmlFor="name" className="form__label">Số điện thoại</label>
                        </div>
                        <div className="form__group field">
                            <input type="input" className="form__field" placeholder="Name" name="name" id="name" required />
                            <label htmlFor="name" className="form__label">Địa chỉ</label>
                        </div>
                        <div className="form__group field">
                            <button className="custom-button">Click Me</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}

export default withRouter(UserPage);