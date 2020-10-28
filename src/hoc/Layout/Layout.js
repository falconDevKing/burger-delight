import React, {Component} from 'react'
import Auxillary from '../Auxillary'
import classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import {connect} from 'react-redux'


class Layout extends Component {

   state = {
      showSideDrawer : false
   }


   sideDrawerClosedHandler = () => {
      this.setState({showSideDrawer: false})
   }

   sideDrawerToggleHandler = () => {
      this.setState( (prevState) => {
         return {showSideDrawer: !prevState.showSideDrawer}
      })
   }

   render(){
      
      return(
         <Auxillary>
            <Toolbar 
               isAuth = {this.props.isAuthenticated}
               drawerToggleClicked={this.sideDrawerToggleHandler} />
            <SideDrawer 
               isAuth = {this.props.isAuthenticated}
               closed={this.sideDrawerClosedHandler} 
               open={this.state.showSideDrawer} />
            <main className={classes.content}>
               { this.props.children} 
            </main>
         </Auxillary>
      )
   }
} 

const mapStateToProps = state => {
   return {
      isAuthenticated: state.auth.token !== null
   }
}

export default connect(mapStateToProps)(Layout);