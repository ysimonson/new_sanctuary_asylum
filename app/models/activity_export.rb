# frozen_string_literal: true

class ActivityExport
  def self.generate(activities)
    column_headers = ['Event', 'Date', 'Location Name', 'Judge', 'No. of Accompaniments']

    CSV.generate(headers: true) do |csv|
      csv << column_headers

      activities.each do |activity|
        row = []
        row << activity.event
        row << activity.occur_at.to_s
        row << activity.location.name
        row << activity.judge.name
        row << activity.accompaniments.count.to_s
        csv << row
      end
    end
  end
end
