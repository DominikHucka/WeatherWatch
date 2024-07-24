import * as React from 'react';
import { Component } from 'react';
import '../css/header.css';


interface HeaderProps {

}

interface HeaderState {

}

class Header extends React.Component<HeaderProps, HeaderState> {
    state = {}
    render() {
        return <nav className="navbar bg-primary" data-bs-theme="dark">
            <h1>Weahter Analyst</h1>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
        </nav>;
    }
}

export default Header;