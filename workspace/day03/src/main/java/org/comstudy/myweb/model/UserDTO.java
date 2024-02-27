package org.comstudy.myweb.model;

public class UserDTO {
	private int no;
	private String name;
	private String job;
	
	public UserDTO() {}

	public UserDTO(int no, String name, String job) {
		super();
		this.no = no;
		this.name = name;
		this.job = job;
	}

	public int getNo() {
		return no;
	}

	public void setNo(int no) {
		this.no = no;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getJob() {
		return job;
	}

	public void setJob(String job) {
		this.job = job;
	}

	@Override
	public String toString() {
//		return "UserDTO [no=" + no + ", name=" + name + ", job=" + job + "]";
		return String.format("<tr><td>%d</td><td>%s</td><td>%s</td></tr>", no,name,job);
	}
}
