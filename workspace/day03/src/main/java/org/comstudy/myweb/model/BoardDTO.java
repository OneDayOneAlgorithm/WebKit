package org.comstudy.myweb.model;

public class BoardDTO {
	String title;
	String content;
	String name;
	public BoardDTO(String name, String title, String content) {
		super();
		this.title = title;
		this.content = content;
		this.name = name;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	@Override
	public String toString() {
//		return "UserDTO [no=" + no + ", name=" + name + ", job=" + job + "]";
		return String.format("<tr><td>%s</td><td>%s</td><td>%s</td></tr>", name,title,content);
	}
}
