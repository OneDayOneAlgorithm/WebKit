package org.comstudy.myweb.model;

public class TodoDTO {
	int no;
	String title;
	public TodoDTO(int no, String title) {
		super();
		this.no = no;
		this.title = title;
	}
	public int getNo() {
		return no;
	}
	public void setNo(int no) {
		this.no = no;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	@Override
	public String toString() {
//		return "UserDTO [no=" + no + ", name=" + name + ", job=" + job + "]";
		return String.format("<tr><td>%d</td><td>%s</td></tr>", no,title);
	}
}
