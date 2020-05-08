const express = require('express');

module.exports = () => {
    const postController = require('../controllers/post.controller');
    const router = express.Router();

    router.route('/:id').get(postController.findId);
    router.route('/').get(postController.find);
    router.route('/updateContent').put(postController.updateContent);
    router.route('/').post(postController.add);
    router.route('/deleteContent/:id').delete(postController.deleteContent);
    router.route('/getDate/:id').get(postController.getByDate);
    router.route('/keyword/:keyword').get(postController.getkeyword);
    router.route('/updateAuto').put(postController.updateAuto);
    router.route('/getMain').post(postController.getMain);
    router.route('/getType/:id').get(postController.getType);
    router.route('/updateType').put(postController.updateType);
    router.route('/keyword/:keyword/:type').get(postController.getkeywordType);
    router.route('/getDate/:keyword/:type').get(postController.getByDateType);

    router.route('/recent').get(postController.getRecent);
    router.route('/month').get(postController.getMonth);
    router.route('/start').get(postController.getStart);
    router.route('/end').get(postController.getEnd);
    router.route('/year').get(postController.getYear);

    
    // router.route('/postContent').post(postController.postContent);
  
    // router.route('/findContentId/:id').get(postController.findContentId);
    // router.route('/deleteContent/:id').delete(postController.deleteContent);
    router.route('/typeContent/:id').get(postController.getType); 

 

 
    router.route('/last').get(postController.getLast);
    router.route('/csr').get(postController.getCsr);
    router.route('/news').get(postController.getNews);
    router.route('/events').get(postController.getEvents);


    // router.route('/post/:id').get(postController.getYear);




    

    
    return router;
};
