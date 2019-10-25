<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Posts_model extends CI_Model {

    private $posts = 'posts';
	
	 public function __construct() {
        parent::__construct();
        $this->load->database();
        $this->load->helper('date');
    }
	
    function get_posts_list() {
		
		$this->db->order_by("date_posted", "desc");
        $query = $this->db->get($this->posts);
        if ($query) {
            return $query->result();
        }
        return NULL;
    }

    function get_posts($id) {
        $query = $this->db->get_where($this->posts, array("id" => $id));
        if ($query) {
            return $query->row();
        }
        return NULL;
    }
	
    function add_posts($post) {
        $data = array('post_txt' => $post ,'likes'=>0,'dislikes'=>0, 'date_posted'=>mysql_datetime());
        $this->db->insert($this->posts, $data);
    }

    function update_likes($id) {
      	
		$sql = "update posts set likes=likes+1 where id='$id'";
        $this->db->query($sql);
		
		$data = array('post_id' => $id);
        $this->db->insert('posts_favourites', $data);
    }
	
    function delete_post($post_id) {
        $this->db->where('id', $post_id);
        $this->db->delete($this->posts);
    }
	
	function get_favourites_posts_list(){
		
		
		$sql = "select * from posts_favourites ,posts where posts.id =posts_favourites.post_id GROUP BY posts_favourites.post_id DESC";
        $query = $this->db->query($sql);
        if ($query) {
            return $query->result();
        }
		
	}

}