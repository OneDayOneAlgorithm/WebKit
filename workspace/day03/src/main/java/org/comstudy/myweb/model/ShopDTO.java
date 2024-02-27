package org.comstudy.myweb.model;

public class ShopDTO {
	private int no;
	private String name;
	private int cost;
	
	public ShopDTO(int no, String name, int cost) {
		super();
		this.no = no;
		this.name = name;
		this.cost = cost;
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

	public int getCost() {
		return cost;
	}

	public void setCost(int cost) {
		this.cost = cost;
	}
	
	@Override
	public String toString() {
//		return "UserDTO [no=" + no + ", name=" + name + ", job=" + job + "]";
		return String.format("<tr><td>%d</td><td>%s</td><td>%d</td></tr>", no,name,cost);
	}
}
