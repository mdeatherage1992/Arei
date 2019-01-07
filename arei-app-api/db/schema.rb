# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_01_06_110057) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "admins", id: :serial, force: :cascade do |t|
    t.string "admin_id"
    t.string "admin_password"
    t.string "admin_coordinate", array: true
    t.string "admin_email"
    t.string "slug", array: true
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.index ["email"], name: "index_admins_on_email", unique: true
    t.index ["reset_password_token"], name: "index_admins_on_reset_password_token", unique: true
  end

  create_table "products", id: :serial, force: :cascade do |t|
    t.string "title"
    t.string "tags", array: true
    t.integer "price"
    t.string "description"
    t.point "coordinates", array: true
    t.string "rfid"
    t.integer "ratings", array: true
  end

  create_table "types", id: :serial, force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "tags", array: true
    t.integer "ratings", array: true
  end

  create_table "users", id: :serial, force: :cascade do |t|
    t.string "user_id"
    t.string "user_password"
    t.string "user_coordinate", array: true
    t.string "user_email"
    t.string "slug", array: true
    t.string "username"
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
