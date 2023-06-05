// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import "./jquery"
import * as bootstrap from "bootstrap"
import "./sbadmin/sb-admin-2.min"
Turbo.session.drive = false