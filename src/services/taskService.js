const supabase = require("../config/supabase");

exports.createTask = async (data) => {
  const { data: task, error } = await supabase
    .from("tasks")
    .insert([{ title: data.title }])
    .select()
    .single();

  if (error) throw error;
  return task;
};

exports.getAllTasks = async () => {
  const { data, error } = await supabase
    .from("tasks")
    .select("*");

  if (error) throw error;
  return data;
};

exports.updateTask = async (id, data) => {
  const { data: updated, error } = await supabase
    .from("tasks")
    .update(data)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return updated;
};

exports.deleteTask = async (id) => {
  const { error } = await supabase
    .from("tasks")
    .delete()
    .eq("id", id);

  if (error) throw error;
};

