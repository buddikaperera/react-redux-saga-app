<?php  if (!defined('BASEPATH')) exit('No direct script access allowed');
/**
 * Extends date helper to return current time in MySQL datetime format
 * By Dave Rogers
 * Shinytype.com
 *
 * @access	public
 * @param	string (optional)
 * @return	string
 */
function mysql_datetime($date=null) {
	if(!$date) {
		// use now() instead of time() to adhere to user setting
		$date = now();
		}
	if(is_numeric($date) && strlen($date)==10) {
		return mdate("%Y-%m-%d %H:%i:%s", $date);
		}	else	{
		// try to use now()
		return mdate("%Y-%m-%d %H:%i:%s", now());
		}
	}


function mysql_date($date=null) {
	if(!$date) {
		// use now() instead of time() to adhere to user setting
		$date = now();
		}
	if(is_numeric($date) && strlen($date)==10) {
		return mdate("%Y-%m-%d", $date);
		}	else	{
		// try to use now()
		return mdate("%Y-%m-%d", now());
		}
	}

function mysql_time($date=null) {
	if(!$date) {
		// use now() instead of time() to adhere to user setting
		$date = now();
		}
	if(is_numeric($date) && strlen($date)==10) {
		return mdate("%H:%i:%s", $date);
		}	else	{
		// try to use now()
		return mdate("%H:%i:%s", now());
		}
	}

function mysql_ref_date($date=null) {
	if(!$date) {
		// use now() instead of time() to adhere to user setting
		$date = now();
		}
	if(is_numeric($date) && strlen($date)==10) {
		return mdate("%Y%m", $date);
		}	else	{
		// try to use now()
		return mdate("%Y%m", now());
		}
	}

function mysql_report_date($date=null) {
	if(!$date) {
		// use now() instead of time() to adhere to user setting
		$date = now();
		}
	if(is_numeric($date) && strlen($date)==10) {
		return mdate("%d/%m/%Y", $date);
		}	else	{
		// try to use now()
		return mdate("%d/%m/%Y", now());
		}
	}

function mysql_report_db_date($date=null) {
	if(!$date) {
		// use now() instead of time() to adhere to user setting
		$date = now();
		}
	if(is_numeric($date) && strlen($date)==10) {
		return mdate("%Y-%m-%d", $date);
		}	else	{
		// try to use now()
		return mdate("%Y-%m-%d", now());
		}
	}


// --------------------------------------------------------------------

/**
 * Take a MySQL datetime var and turn it into PHP's Unix Epoch time
 *
 * @access	public
 * @param	string
 * @return	int
 */
function datetime_to_unix($date) {
	if(!$date) {
		return false;
		}	else	{
		return date('U', strtotime($date));
		}
	}

/* End of file MY_date_helper.php */
/* Location: ./application/helpers/MY_date_helper.php */

//$this->load->helper('date');
//echo "the current datetime is ".mysql_datetime();

?>