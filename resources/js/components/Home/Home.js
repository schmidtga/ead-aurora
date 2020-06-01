import React, {Component} from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
class Home extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false,
            user: {}
        }
    }
    // check if user is authenticated and storing authentication data as states if true
    componentWillMount() {
        let state = localStorage["appState"];
        if (state) {
            let AppState = JSON.parse(state);
            this.setState({ isLoggedIn: AppState.isLoggedIn, user: AppState.user });
        }
    }
    render() {
        return (
        <div>
            <Header userData={this.state.user} userIsLoggedIn={this.state.isLoggedIn}/>


            <div class="container py-5">
                <div className="row">
                    <div className="col-12">
                        <h1>Educacao Fundamental I</h1>
                        <hr/>

                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe src="https://www.youtube.com/embed/4yTmJvhgb6o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <h3>Transmitido ao vivo em 14 de maio de 2020</h3>

                        <div class="clearfix py-5"></div>

                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe src="https://www.youtube.com/embed/4oVOzbJY21M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <h3>Transmitido ao vivo em 13 de maio de 2020</h3>

                        <div class="clearfix py-5"></div>

                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe src="https://www.youtube.com/embed/AgdvtnIB4kM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <h3>Transmitido ao vivo em 12 de maio de 2020</h3>

                        <div class="clearfix py-5"></div>

                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe src="https://www.youtube.com/embed/8r4fBjKcplY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <h3>Transmitido ao vivo em 11 de maio de 2020</h3>

                        <div class="clearfix py-5"></div>

                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe src="https://www.youtube.com/embed/Cio-879cTfA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <h3>Transmitido ao vivo em 7 de maio de 2020</h3>

                        <div class="clearfix py-5"></div>

                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe src="https://www.youtube.com/embed/3buLM5e_SlA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <h3>Transmitido ao vivo em 6 de maio de 2020</h3>

                        <div class="clearfix py-5"></div>

                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe src="https://www.youtube.com/embed/B_5x5mpViY0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <h3>Transmitido ao vivo em 5 de maio de 2020</h3>

                        <div class="clearfix py-5"></div>

                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe src="https://www.youtube.com/embed/yxusUk4Lxuw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <h3>Transmitido ao vivo em 4 de maio de 2020</h3>

                        <div class="clearfix py-5"></div>


                    </div>
                </div>
            </div>

            <Footer/>
        </div>
        )
    }
}
export default Home