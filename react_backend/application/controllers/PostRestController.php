<?php

defined('BASEPATH') OR exit('No direct script access allowed');

header('Access-Control-Allow-Origin: *');

if($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
	header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
	header('Access-Control-Allow-Headers: Content-Type');
	exit;
}

//required for REST API
require(APPPATH . '/libraries/REST_Controller.php');
require APPPATH . 'libraries/Format.php';

use  Restserver\Libraries\REST_Controller;


class PostRestController extends REST_Controller {
	
	function __construct() {
        parent::__construct();
        $this->load->model('posts_model', 'po');
    }
	
	function posts_get() {
        $websites = $this->po->get_posts_list();

        if ($websites) {
            $this->response($websites, 200);
        } else {
            $this->response(array(), 200);
        }
    }

	function add_posting_post() {
      
        $post = $this->post('title');
        
        
        $result = $this->po->add_posts($post);

        
		
        if ($result === FALSE) {
            $this->response(array('status' => 'alert'));
        } else {
            $this->response(array('status' => 'success'));
        }

    		
		
		
    }
	
	
	function create_post_post() {
       
	   $post = $this->post('post');
        
        
        $result = $this->po->add_posts($post);

        
		
        if ($result === FALSE) {
            $this->response(array('status' => 'failed'));
        } else {
            $this->response(array('status' => 'success'));
        }

    		
		
		
    }

    function update_put($id) {
        

        $result = $this->po->update_likes($id);

        if ($result === FALSE) {
            $this->response(array('status' => 'failed'));
        } else {
            $this->response(array('status' => 'success'));
        }
    }
	
	function delete_post_delete($post_id) { //path parameter, example, /delete/1

        $result = $this->po->delete_post($post_id);

        if ($result === FALSE) {
            $this->response(array('status' => 'failed'));
        } else {
            $this->response(array('status' => 'success'));
        }
    }
	
	
	function favourites_posts_get() {
        $websites = $this->po->get_favourites_posts_list();

        if ($websites) {
            $this->response($websites, 200);
        } else {
            $this->response(array(), 200);
        }
    }
	
}?>