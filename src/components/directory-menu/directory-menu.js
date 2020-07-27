import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect'

import Item from '../menu-item/menu-item';
import {selectDirectorySections} from '../../redux/directory/directory.selector'

import './directory-menu.scss'

const Directory = ({sections}) => (
            <div className='directory-menu'>
                {sections.map(({id, ...otherSectionProps}) => (
                    <Item key={id} {...otherSectionProps}/>
                ))}
            </div>
        )

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})
export default connect(mapStateToProps)(Directory);