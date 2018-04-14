class GroupsController < ApplicationController

  def edit
  end

  def new
  end
  
  def create
    @group = Group.new(group_params)
    if @group.save
      redirect_to root_path, notice: "グループが作成されました。"
    else
      render: nwe
    end
  end

  def update
  end

  private
  def group_params
    params.require(:group).permit(:name, {user_ids: []})
end
