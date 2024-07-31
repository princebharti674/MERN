const express=require('express');
const { createPost, likeAndUnlikePost,deletePost ,updateCaption,CommentOnPost, deleteComment} = require('../controllers/post');
const { isAuthenticated } = require('../middleware/auth');
const { getPostOfFollowing } = require('../controllers/user');



const router = express.Router();

router
    .route("/post/upload").post( isAuthenticated, createPost)
    .get( isAuthenticated, likeAndUnlikePost)

router.route("/posts").get( isAuthenticated, getPostOfFollowing)
router.route("/post/:id").delete( isAuthenticated, deletePost)
router.route("/post/:id").put( isAuthenticated, updateCaption)
router.route("/post/comment/:id").put( isAuthenticated, CommentOnPost).delete( isAuthenticated, deleteComment)


module.exports = router;    