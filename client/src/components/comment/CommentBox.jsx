import React, { useState, useRef } from 'react';
import cn from 'classnames';
import useDynamicHeightField from "./useDynamicHeightField";
import './CommentBox.css';
// import Profile from './images/profile.jpg'


const INITIAL_HEIGHT = 46;

const CommentBox = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [commentValue, setCommentValue] = useState("");

    const outerHeight = useRef(INITIAL_HEIGHT);
    const textRef = useRef(null);
    const containerRef = useRef(null);

    useDynamicHeightField(textRef, commentValue);


    const onExpand = () => {
        if (!isExpanded) {
            outerHeight.current = containerRef.current.scrollHeight;
            setIsExpanded(true);
        }
    }

    const onChange = (e) => {
        setCommentValue(e.target.value);
    }

    const onClose = () => {
        setCommentValue("");
        setIsExpanded(false);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('send the form data to database')
    };

    return (
        <form
            onSubmit={onSubmit}
            ref={containerRef}
            className={cn("comment-box", {
                expanded: isExpanded,
                collapsed: !isExpanded,
                modified: commentValue.length > 0,
            })}
            style={{
                minHeight: isExpanded ? outerHeight.current : INITIAL_HEIGHT
            }}
        >
            <div className="header">
                <div className="userName">
                    <img
                        // src={Profile}
                        // alt="Profile picture"
                    />
                    <span>User Name</span>
                </div>
            </div>

            <label htmlFor="comment">Add a comment!</label>
            <textarea
                ref={textRef}
                onClick={onExpand}
                onFocus={onExpand}
                onChange={onChange}
                className="comment-field"
                placeholder="Add a comment!"
                value={commentValue}
                name="comment"
                id="comment"
            />

            <div className="actions">
                <button type="button" className="cancel" onClick={onClose}>
                    Cancel
                </button>
                <button type="submit" disabled={commentValue.length < 1}>
                    Add a Comment...
                </button>
            </div>

        </form>
    );
};

export default CommentBox;

