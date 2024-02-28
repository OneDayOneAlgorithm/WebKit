package org.comstudy.myweb.model;

public class TodoDTO {
	private int no;
	private boolean done;
	private String title;
	public TodoDTO(int no, boolean done, String title) {
		super();
		this.no = no;
		this.done = done;
		this.title = title;
	}
	public int getNo() {
		return no;
	}
	public void setNo(int no) {
		this.no = no;
	}
	public boolean isDone() {
		return done;
	}
	public void setDone(boolean done) {
		this.done = done;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	@Override
	public String toString() {
		return "TodoDTO [no=" + no + ", done=" + done + ", title=" + title + "]";
	}
	
	public TodoDTO(int no) {
		this(no, false, "");
	}

	
}