require 'csv'

describe ActivityExport do
  describe '.generate' do

    let(:judge) { FactoryGirl.create(:judge) }
    let(:activity) { FactoryGirl.create(:activity, judge: judge ) }
    let(:accompaniment) { FactoryGirl.create(:accompaniment, activity: activity) }

    let(:activity_collection) { [activity] }

    subject { Activity::Export.generate(activity_collection) }

    it 'returns a String' do
    	expect(subject).to be_a(String)
    end

    it 'returns the intended data' do

      column_headers = ["Event", "Date", "Location Name", "Judge", "No. of Accompaniments"]
    	expect(CSV.parse(subject)[0]).to eq(column_headers)

    	expect(subject).to include(activity.event)
    	expect(subject).to include(activity.occur_at)
    	expect(subject).to include(activity.location.name)
    	expect(subject).to include(activity.judge.name)
    	expect(subject).to include(activity.accompaniments.count)
    end
  end
end